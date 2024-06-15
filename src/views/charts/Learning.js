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

const Learning = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
      <span className="h1">Perspectiva de Aprendizaje y Conocimiento</span>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="La perspectiva de aprendizaje y conocimiento en la cafetería Alexander Coffee se centra en evaluar el desarrollo de habilidades del personal, la implementación de nuevos conocimientos en prácticas operativas y la mejora continua a través de la capacitación y el aprendizaje organizacional."
        />
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Progreso de Aprendizaje del Personal</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Capacitaciones Completadas',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Nivel de Satisfacción del Cliente</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Satisfacción del Cliente (%)',
                    backgroundColor: '#f87979',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="meses"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Distribución de Herramientas de Aprendizaje</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Manual', 'Digital', 'Video', 'In-Person'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Evaluaciones del Personal</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Excelente', 'Bueno', 'Regular'],
                datasets: [
                  {
                    data: [random(), random(), random()],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Uso de Recursos</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    data: [random(), random(), random(), random(), random(), random()],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB', '#9966FF'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Habilidades del Personal</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: ['Atención al Cliente', 'Rapidez', 'Limpieza', 'Eficiencia', 'Trabajo en Equipo', 'Innovación'],
                datasets: [
                  {
                    label: 'Nivel de Habilidad',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [random(), random(), random(), random(), random(), random()],
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

export default Learning
