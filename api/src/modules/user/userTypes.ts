export type userTypes = {
  id?: string
  userName: string
  password: string
}

export interface response {
  success: boolean
  message?: string
  user?: Object
}
