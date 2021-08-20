import { Add_Person } from '../constant'

export const createAddPersonAction = personObj => (
    {
        type: Add_Person, data: personObj
    }
)