
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import React, { PureComponent } from 'react';


const PatientsChart = () => {
    const data = [
        {
          "subject": "assignment-one",
          "mark": 53,
          "fullMark": 60
        },
        {
          "subject": "assignment-two",
          "mark": 56,
          "fullMark": 60
        },
        {
          "subject": "assignment-three",
          "mark": 60,
          "fullMark": 60
        },
        {
          "subject": "assignment-four",
          "mark": 60,
          "fullMark": 60
        },
        {
          "subject": "assignment-five",
          "mark": 54,
          "fullMark": 58
        },
        {
          "subject": "assignment-six",
          "mark": 58,
          "fullMark": 60
        },
        {
          "subject": "assignment-seven",
          "mark": 60,
          "fullMark": 60
        }
    ]


    const data2 = [
        {
          name: 2018,
          uv: 2800,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 2019,
          uv: 2600,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 2020,
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 2021,
          uv: 2380,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 2022,
          uv: 2890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 2023,
          uv: 2590,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 2024,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='md:flex  mt-12 '>
            <div className=''>
            <h1 className='text-4xl font-semibold mb-6 text-center'>Appoints</h1>
            <RadarChart outerRadius={100} width={730} height={350} data={data}>
  <PolarGrid />
  {/* <PolarAngleAxis dataKey="subject" /> */}
  <PolarRadiusAxis angle={30} domain={[0, 65]} />
        <Tooltip></Tooltip>
  <Radar name="Seats" dataKey="fullMark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
  <Radar name="Appoints" dataKey="mark" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
            </div>


<div className=' '>
<h1 className='text-4xl font-semibold mb-6'>Patients</h1>
<BarChart width={600} height={400} data={data2}>
            <Bar dataKey="uv" fill="#8884d8" />
            <XAxis dataKey='name'></XAxis>
            <YAxis />
            </BarChart>
</div>
        </div>
    );
};

export default PatientsChart;