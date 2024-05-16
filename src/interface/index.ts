
export interface ErrorResProps {
    code: number
    msg: string
}

export type userType = {
    username: string,
    jobnum:string,
    title:string,
    avatar:string,
    isAdmin: boolean
}

export type LoginResult= {
    code:number,
    msg:string,
    data:{
        token:string,
    }
}

export interface expressData {
    id: number,
    title: string,
    editor: string,
    contents: string,
    edit_time: string,
    total_read_num: number,
}

export interface EmpInfoList{
    infoType:string,
    infoContent:string,
}

export interface OrgRetInfo{
    empId:string,
    empInfo:EmpInfoList[],
    empName:string,
    leaderId:string,
    leaderName:string,
}

export interface ErrorResProps{
    code:number
    msg:string
  }
  
  export interface SuccessResProps{
  code:number
  data:any
  msg:string
  }
  