const setActive = (active) => 
    window.trigger('ems-issue-med-sertificate.active', active);

window.test.EMSIssueMedSertificate = {
    setActive
}