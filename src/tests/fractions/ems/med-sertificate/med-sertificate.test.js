import MedSertificate from './med-sertificate.json';

const MedSertificateJSON = JSON.stringify(MedSertificate);

const setActive = (active) => 
    window.trigger('ems-med-sertificate.active', active);   
const setData = () => 
    window.trigger('ems-med-sertificate.data', MedSertificateJSON);

window.test.EMSMedSertificate = {
    setActive, setData
}