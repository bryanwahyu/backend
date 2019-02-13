'use strict';
const Users=use('App/Models/User');
const Parents=use('App/Models/Parent');
const Childs=use('App/Models/Child');
const Fisios=use('App/Models/Fisio');
const Theapis=use('App/Models/Therapi');
const Psikologs=use('App/Models/Psikolog');
class LoginController {
 async login({ request,response, auth }){
     let req=request.all();
     
     if(await auth.attempt(req.username,req.password))
     {
         let user =Users.findBy('username',req.username);
         let data={};
         data.kode=200;
         data.msg='Selamat Datang di AkuAnakCP.. Sarana Informasi Untuk Anak Cerebral Palsy';
         data.token=await auth.generate(user)
         return response.json(data);
     }
     let data={};
     data.kode=204;
     data.msg='Mohon maaf username dan password anda salah mohon diperiksa kembali';
     return response.json(data);
    }
 async daftar_orangtua({request,response}){
    let req=request.all();
    let checkusername= Users.query().where('username',req.username).count();
    let checkemail=Users.query().where('email',req.email).count();
        if (checkemail==0 && checkusername==0)
        {
            let newuser= new Users();
            newuser.username=req.username;
            newuser.password=req.password;
            newuser.email=req.email;
            await newuser.save();

            let parent=new Parents();
            parent.nama_lengkap=req.nama_lengkap;
            parent.user_id=newuser.id;
            parent.alamat=req.alamat;
            parent.info_dari=req.info_dari;
            parent.jenis_kelamin=req.jenis_kelamin;
            await parent.save();

            let child= new Childs();
            child.nama=req.nama;
            child.alamat=parent.alamat;
            child.pendidikan=req.pendidikan;
            child.cita_cita=req.cita_cita;
            child.tanggal_lahir=req.tanggal_lahir;
            child.jenis_kelamin=req.jenis_kelamin;
            child.hobi=req.hobi;
            child.jenis_cp=req.jenis_cp;
            child.notelp=req.notelp;
            child.parent_id=parent.id;
            await child.save();
            
            let data={};
            data.kode=200;
            data.msg='Selamat anda sudah terdaftar mari login kembali';
            
            return response.json(data);
        }
        
        let data={};
        data.kode=200;
        data.msg='Mohon maaf username dan email sudah di gunakan';

        return response.json(data);
 }
 async daftar_anak_cp({ request,response }){
     let  req=request.all();
     let checkusername= Users.query().where('username',req.username).count();
     let checkemail=Users.query().where('email',req.email).count();
     if(checkemail==0 &&checkusername==0){
        let newuser =new Users();
        newuser.username=req.username;
        newuser.password=req.password;
        newuser.email=req.email;
        await newuser.save();
        if(req.parent==0)
        {
            let child= new Childs();
            child.user_id=newuser.id;
            child.nama=req.nama;
            child.alamat=req.alamat;
            child.pendidikan=req.pendidikan;
            child.cita_cita=req.cita_cita;
            child.tanggal_lahir=req.tanggal_lahir;
            child.jenis_kelamin=req.jenis_kelamin;
            child.hobi=req.hobi;
            child.jenis_cp=req.jenis_cp;
            child.notelp=req.notelp;
            await child.save();

            let data={};
            data.kode=200;
            data.msg='Anda sudah mendaftarkan diri anda melalui akun ini mohon anda hubungi orang tua anda agar orang tua memberikan infomarsi informasi untuk kedepannya';
            
            return response.json(data);
        }
        else
        {
            let child =Childs.findBy('parent_id',req.parent);
            child.user_id=newuser.id;
            await child.save();
            let data={};
            data.kode=200;
            data.msg='Anda Sudah Mendaftarkan Akun Anda Mohon Anda ';

            return response.json(data);

        }
     }
     let data={};
     data.kode=204;
     data.msg='Maaf username dan email tidak bisa digunakan';

     return response.json(data);
 }
 async daftar_lokasi({request,response}){
     let req=request.all();

     let lokasi= new Therapis();
     lokasi.nama=req.nama;
     lokasi.alamat=req.alamat;
     lokasi.lat=req.lat;
     lokasi.long=req.long;
     lokasi.jenis=req.jenis;
     await lokasi.save();

     let data={};
     data.kode=200;
     data.msg='Lokasi Therapis telah terdaftar';

     return response.json(data);
 }
 async daftar_fisio({request,response}){
    let  req=request.all();
    let checkusername= Users.query().where('username',req.username).count();
    let checkemail=Users.query().where('email',req.email).count();
    if(checkemail==0 &&checkusername==0){
        let newuser =new Users();
        newuser.username=req.username;
        newuser.password=req.password;
        newuser.email=req.email;
        await newuser.save();

        let fisio= new Fisios();
        
    }

    let data={};
    data.kode=200;
    data.msg='Mohon maaf username dan email sudah di gunakan';

    return response.json(data);
 }
}


module.exports = LoginController;

