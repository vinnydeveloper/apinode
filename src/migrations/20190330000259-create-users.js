module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      rg: {
        allowNull: false,
        type: DataTypes.STRING,
       
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        unique:true
        
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dataNascimento: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      sexo:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      telefone: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      plano: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};