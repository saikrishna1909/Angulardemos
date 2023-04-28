export class AccountService{
    accounts=[]

    addAccount(name:string,status:string){
        this.accounts.push({
            name:name,
            status:status
        })
    }
    updatStatus(id:number,status:string){
        this.accounts[id].status=status
    }
    deleteAccount(id:number){
        this.accounts.splice(id,1)
    }

}