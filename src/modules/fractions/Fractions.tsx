import { Inspection } from './ems/inspection/inspection'
import { IssueMedSertificate } from './ems/issueMedSertificate/issueMedSertificate'
import { MedSertificate } from './ems/medSertificate/medSertificate'

import { GovernmentPassportCamera } from './government/government-passport-camera/government-passport-camera'

export const Fractions = () => {

 return(
  <>
   <Inspection />
   <IssueMedSertificate />
   <MedSertificate />
   <GovernmentPassportCamera />
  </>
 )
}