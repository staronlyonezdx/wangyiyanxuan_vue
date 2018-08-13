import ajax from './ajax'

export const reqData = () => ajax('/data')

export const reqHome = () => ajax('/home')

export const reqTopic = () => ajax('/topic')

export const reqFeilei = () => ajax('/feileiData')


