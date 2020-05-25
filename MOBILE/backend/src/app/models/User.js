import Sequelize,{Model} from 'sequelize'

class User extends Model{
  static init(sequelize){
    super.init({
      name:Sequelize.STRING,
      cpf:Sequelize.STRING,
      dor:Sequelize.BOOLEAN,
      dor_intensidade:Sequelize.INTEGER,
      desconforto:Sequelize.BOOLEAN,
      desconforto_corpo:Sequelize.STRING,
      cirurgia:Sequelize.BOOLEAN,
      cirurgia_tempo:Sequelize.STRING,
      cirurgia_tipo:Sequelize.STRING,
      cirurgia_dor:Sequelize.STRING,

    },{
      sequelize
    }
    )

    return this
  }

}

export default User
