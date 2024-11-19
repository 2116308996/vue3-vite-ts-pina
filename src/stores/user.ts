import { defineStore } from 'pinia'
import api from '@/api'

//import { useRouteStore } from './route'
//import { useMenuStore } from './menu'
import { ElMessage } from 'element-plus/lib/components/index.js'
export const useUserStore = defineStore(
    // 唯一ID
    'user',
    {
        state: () => ({
            account: localStorage.account || '',
            token: localStorage.token || '',
            failure_time: localStorage.failure_time || '',
            permissions: [],
            userType:localStorage.userType || 0,
            orgStatus:localStorage.orgStatus || 0,
            userId:localStorage.userId||0,
            UserName:localStorage.UserName || '',
        }),
        getters: {
            isLogin: state => {
                let retn = false
                if (state.token) {
                    retn = true
                }
                return retn
            }
        },
        actions: {
            login(data:any) {
                return new Promise((resolve, reject) => {
                    api.post('api/app/account/login', {
                            userName: data.account,
                            password: data.password
                    }).then((res:any) => {
                        if (res.status == -1) {
                            reject('用户名或密码错误')
                            ElMessage({
                                message: '用户名或密码错误',
                                type: 'error'
                            })
                            return
                        }
                        if (res.status == -2) {
                            reject('用户名及密码不能为空')
                            ElMessage({
                                message: '用户名及密码不能为空',
                                type: 'error'
                            })
                            return
                        }
                        localStorage.setItem('account', data.account)
                        localStorage.setItem('token', 'Bearer ' + res.accessToken)
                        localStorage.setItem('failure_time', res.exTime)
                        this.account = data.account
                        this.token = 'Bearer ' + res.accessToken
                        this.failure_time = res.exTime
                        api.get('api/app/account', {
                        }).then((res2:any) => {
                            localStorage.setItem('userType', res2.user.userType)
                            let roles = '';
                            let rolesName = '';
                            res2.roles.forEach((item:any) => {
                                roles += item.roleType;
                                rolesName += item.roleName;
                            });
                            localStorage.setItem('roles', roles)
                            localStorage.setItem('rolesName', rolesName)
                            localStorage.setItem('orgStatus',res2.user.orgStatus)
                            this.userType=res2.user.userType
                            this.orgStatus=res2.user.orgStatus
                            localStorage.setItem('userId', res2.user.id)
                            this.userId=res2.user.id
                            console.log(res2.user);
                            localStorage.setItem('name', res2.name)
                            localStorage.setItem('UserName', res2.user.name)
                            localStorage.setItem('projectId', res2.projectId)
                            localStorage.setItem('unitId', res2.unitId)
                            localStorage.setItem('teamId', res2.teamId)
                            localStorage.setItem('personId', res2.personId)
                            localStorage.setItem('usertype', res2.type)
                            resolve("")
                        })
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            logout() {
                return new Promise((resolve, reject) => {
                    api.post('api/app/account/logout', {
                    }).then(res => {
                      //  const routeStore = useRouteStore()
                      //  const menuStore = useMenuStore()
                        localStorage.removeItem('account')
                        localStorage.removeItem('token')
                        localStorage.removeItem('failure_time')
                        localStorage.removeItem('unitsAll')
                        localStorage.removeItem('userType')
                        localStorage.removeItem('orgStatus')
                        localStorage.clear()
                        this.account = ''
                        this.token = ''
                        this.failure_time = ''
                        this.userType=""
                        this.orgStatus=""
                        //routeStore.removeRoutes()
                        //menuStore.setActived(0)
                        resolve("")
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            // 获取我的权限
            getPermissions() {
                return new Promise(resolve => {
                    // 通过 mock 获取权限
                    api.get('/api/app/permission/user-codes', {
                    }).then(res => {
                        resolve(res)
                    })
                })
            },
            editPassword(data:any) {
                return new Promise(resolve => {
                    api.post('api/app/account/change-password', {
                        oldPwd: data.password,
                        newPwd: data.newpassword
                    }).then(() => {
                        resolve("")
                    })
                })
            }
        }
    }
)

export default useUserStore
