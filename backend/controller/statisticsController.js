const Utilisateur = require('../models/Utilisateur');
const Publication = require('../models/Publication');
const Commentaire = require('../models/Commentaire');
const Interaction = require('../models/Interaction');
const Abonnement = require('../models/Abonnement');
const Communaute = require('../models/Communaute');

const getPlatformStatistics = async (req, res) => {
  try {
    const [
      totalUsers,
      usersByRole,
      activeUsers,
      totalPublications,
      avgVotes,
      totalCommentaires,
      totalInteractions,
      interactionTypes,
      totalAbonnements,
      totalCommunautes,
      topCommunautes,
      topUsers
    ] = await Promise.all([
      Utilisateur.countDocuments(),
      Utilisateur.aggregate([
        { $group: { _id: "$role", count: { $sum: 1 } } }
      ]),
      Utilisateur.countDocuments({ accountStatus: "active" }),

      Publication.countDocuments(),
      Publication.aggregate([
        {
          $group: {
            _id: null,
            avgUpVotes: { $avg: "$upVotes" },
            avgDownVotes: { $avg: "$downVotes" },
            avgSignals: { $avg: "$signals" }
          }
        }
      ]),

      Commentaire.countDocuments(),

      Interaction.countDocuments(),
      Interaction.aggregate([
        { $group: { _id: "$typeInteraction", count: { $sum: 1 } } }
      ]),

      Abonnement.countDocuments(),

      Communaute.countDocuments(),

      Publication.aggregate([
        {
          $group: {
            _id: "$communityTag",
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]),

      Publication.aggregate([
        {
          $group: {
            _id: "$publisherId",
            publications: { $sum: 1 }
          }
        },
        { $sort: { publications: -1 } },
        { $limit: 5 },
        {
          $lookup: {
            from: "utilisateurs",
            localField: "_id",
            foreignField: "userId",
            as: "user"
          }
        },
        {
          $project: {
            _id: 0,
            publisherId: "$_id",
            publications: 1,
            nom: { $arrayElemAt: ["$user.nom", 0] },
            prenom: { $arrayElemAt: ["$user.prenom", 0] }
          }
        }
      ])
    ]);

    res.status(200).json({
      users: {
        total: totalUsers,
        byRole: usersByRole,
        active: activeUsers
      },
      publications: {
        total: totalPublications,
        avgVotes: avgVotes[0] || { avgUpVotes: 0, avgDownVotes: 0, avgSignals: 0 }
      },
      commentaires: totalCommentaires,
      interactions: {
        total: totalInteractions,
        byType: interactionTypes
      },
      abonnements: totalAbonnements,
      communautes: {
        total: totalCommunautes,
        topCommunautes
      },
      topUsers
    });

  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getPlatformStatistics };
