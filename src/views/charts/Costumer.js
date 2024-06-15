import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Costumer = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={6}>
      <span className="h1">Perspectiva Clientes</span>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="La perspectiva de clientes de la cafetería Alexander Coffee se puede evaluar a través de varios factores clave: el crecimiento del número de clientes, la satisfacción con los productos y las preferencias de los clientes."
        />
        
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Clientes</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Crecimiento de Clientes',
                    backgroundColor: '#6DE886',
                    data: [40, 20, 12, 39, 10, 40, 39, 80],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Preferencias del Cliente</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Tortas', 'Batidos y Helados', 'Cafes', 'Sándwiches'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [60, 40, 80, 30],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Satisfacción del Cliente</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Malos comentarios', 'Buenos comentarios'],
                datasets: [
                  {
                    data: [100, 540],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default Costumer
