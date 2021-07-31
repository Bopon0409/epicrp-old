import MedSertificate from './med-sertificate.json';

const MedSertificateJSON = JSON.stringify(MedSertificate);

// включить/отключить показ интерфейса
const setActive = (active) => 
    window.trigger('ems-med-sertificate.active', active);   
// загрузить данные 'мед. сертификат'
const setData = () => 
    window.trigger('ems-med-sertificate.data', MedSertificateJSON);

window.test.EMSMedSertificate = {
    setActive, setData
}