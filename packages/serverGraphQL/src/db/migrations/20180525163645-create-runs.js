module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Runs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    opponent: {
      type: Sequelize.STRING,
    },
    opponentName: {
      type: Sequelize.STRING,
    },
    start: {
      type: Sequelize.DATE,
    },
    end: {
      type: Sequelize.DATE,
    },
    personId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'People',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },

  }),
  down: queryInterface => queryInterface.dropTable('Runs'),
};
