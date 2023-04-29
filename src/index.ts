import * as _ from 'lodash';

export const exactResponse=(req:any,arr:any,identifyer:string)=>{

    let query:any;
    if(req.headers[identifyer]!==undefined){
    query=  req.headers[identifyer].split(',');
    }else if(req.query[identifyer]!==undefined){
    query=  req.query[identifyer].split(',');
    }else if(req.body[identifyer]!==undefined){
    query=  req.body[identifyer].split(',');
    }else{
      query=null;
    }
    if(_.isArray(arr)){
    return arr.map(e=> _.pick(e, query));
    }else{
    return _.pick(arr, query);
    }
    }
    
    
    
  export  const exactData=(query:string,arr:any)=>{
      let qr=query.split(',');
      if(_.isArray(arr)){
        return arr.map(e=> _.pick(e, qr));
        }else{
        return _.pick(arr, qr);
        }
    }
    

