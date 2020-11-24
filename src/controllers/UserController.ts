import {Request, Response} from 'express';
import User from '../schemas/user'

class UserController{ 
  public async create(req: Request, res: Response): Promise<Response<any>> {
    const { username, password, email } = req.body;
    const newuser = new User({ username, password, email })
    newuser.save(function (err) {
      if (err){
        console.log(err)
      };
      // saved!
    });
    return res.json({ msg: 'create', newuser })
  }

  public async index(req: Request, res: Response) {

    const users = await User.find();
    return res.json({ msg: 'index', users })
  }

  public async profile(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.find({_id: id});
    return res.json({ msg: 'profile', user })
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { username, password , email } = req.body;
    const user = await User.findByIdAndUpdate({_id:id}, {username, password, email})
    return res.json({ msg: 'update', user})
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const del = await User.deleteOne({ _id: id });
    return res.json({msg:'Usuario nao encontrado', del})
  }

}
export default UserController;