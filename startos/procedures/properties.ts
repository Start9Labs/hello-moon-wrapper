import { setupProperties } from 'start-sdk/lib/properties'
import { WrapperData } from '../wrapperData'

/**
 * With access to WrapperData, in this function you determine what to include in the Properties section of the UI
 * 
 * Hello Moon has no properties. See Hello World for an example
 */
export const properties = setupProperties<WrapperData>(async ({ wrapperData }) => {})
