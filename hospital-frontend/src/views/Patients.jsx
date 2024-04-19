import React from 'react'
import Title from '../components/Title/Title'
import Search from '../components/Search/Search'
import Add from '../components/Add/Add'
import Patient from '../components/Patient/Patient'
import patients from '../data/patients'

function Patients() {
  return (
    <div>
      <Title
        title="المرضى الذين زارو المشفى"
        sub="يمكنك تصفح كل المرضى مع زياراتهم وكل بياناتهم المسجلة"
      />
      <Search name="مريض" />
      <div className="d-flex flex-column gap-2">
        <Add />
        <Patient key={patients[0].id} patient={patients[0]} showVisits />
        {patients.slice(1).map((item) => (
          <Patient key={item.id} patient={item} />
        ))}
      </div>
    </div>
  )
}

export default Patients