module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dataNascimento: DataTypes.DATE,
      sexo: DataTypes.BOOLEAN,
      telefone: DataTypes.INTEGER,
      plano: DataTypes.BOOLEAN,
    });
  
    return User;
  }