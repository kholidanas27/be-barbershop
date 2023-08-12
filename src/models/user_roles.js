"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_roles.init(
    {
      roleId: {
        field: "role_id",
        type: DataTypes.INTEGER,
      },
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "user_roles",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return user_roles;
};
