'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mail: any = sequelize.define('Mail', {
    message: DataTypes.TEXT,
    subject: DataTypes.STRING,
    senderEmail: DataTypes.STRING,
    recieverEmail: DataTypes.TEXT,
    readStatus: DataTypes.BOOLEAN,
    sentStatus: DataTypes.BOOLEAN
  }, {});
  Mail.associate = function (models) {
    // associations can be defined here
  };
  return Mail;
};