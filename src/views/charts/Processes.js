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

const Processes = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>
        <span className="h1">Perspectiva de Procesos Internos</span>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="La perspectiva de procesos internos de la cafetería Alexander Coffee se evalúa mediante indicadores clave como el tiempo de preparación de pedidos, el nivel de inventario, el cumplimiento de estándares de calidad y la tasa de desperdicio."
        />
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Tiempo de Preparación de Pedidos</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    label: 'Tiempo de Preparación (min)',
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
          <CCardHeader>Nivel de Inventario</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Café', 'Leche', 'Azúcar', 'Té', 'Chocolate', 'Pan'],
                datasets: [
                  {
                    label: 'Inventario (unidades)',
                    backgroundColor: '#f87979',
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="ingredientes"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Cumplimiento de Estándares de Calidad</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Excelente', 'Bueno', 'Regular', 'Deficiente'],
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
          <CCardHeader>Tasa de Desperdicio</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                  {
                    data: [random(), random(), random(), random(), random(), random()],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Eficiencia de Procesos</CCardHeader>
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
          <CCardHeader>Desempeño del Personal</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: ['Atención al Cliente', 'Rapidez', 'Limpieza', 'Eficiencia', 'Trabajo en Equipo', 'Innovación'],
                datasets: [
                  {
                    label: 'Desempeño del Personal',
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

export default Processes
