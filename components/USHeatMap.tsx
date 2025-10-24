'use client'

import { useState, useRef } from 'react'

// Sample data for each state - you can replace this with real data
const stateData = {
  'CA': { name: 'California', smv: '2,500,000' },
  'TX': { name: 'Texas', smv: '1,800,000' },
  'FL': { name: 'Florida', smv: '1,200,000' },
  'NY': { name: 'New York', smv: '1,100,000' },
  'PA': { name: 'Pennsylvania', smv: '850,000' },
  'IL': { name: 'Illinois', smv: '750,000' },
  'OH': { name: 'Ohio', smv: '680,000' },
  'GA': { name: 'Georgia', smv: '620,000' },
  'NC': { name: 'North Carolina', smv: '580,000' },
  'MI': { name: 'Michigan', smv: '520,000' },
  'NJ': { name: 'New Jersey', smv: '480,000' },
  'VA': { name: 'Virginia', smv: '450,000' },
  'WA': { name: 'Washington', smv: '420,000' },
  'AZ': { name: 'Arizona', smv: '380,000' },
  'MA': { name: 'Massachusetts', smv: '350,000' },
  'TN': { name: 'Tennessee', smv: '320,000' },
  'IN': { name: 'Indiana', smv: '300,000' },
  'MO': { name: 'Missouri', smv: '280,000' },
  'MD': { name: 'Maryland', smv: '260,000' },
  'WI': { name: 'Wisconsin', smv: '240,000' },
  'CO': { name: 'Colorado', smv: '220,000' },
  'MN': { name: 'Minnesota', smv: '200,000' },
  'SC': { name: 'South Carolina', smv: '180,000' },
  'AL': { name: 'Alabama', smv: '160,000' },
  'LA': { name: 'Louisiana', smv: '140,000' },
  'KY': { name: 'Kentucky', smv: '120,000' },
  'OR': { name: 'Oregon', smv: '100,000' },
  'OK': { name: 'Oklahoma', smv: '80,000' },
  'CT': { name: 'Connecticut', smv: '60,000' },
  'UT': { name: 'Utah', smv: '40,000' },
  'IA': { name: 'Iowa', smv: '35,000' },
  'NV': { name: 'Nevada', smv: '30,000' },
  'AR': { name: 'Arkansas', smv: '25,000' },
  'MS': { name: 'Mississippi', smv: '20,000' },
  'KS': { name: 'Kansas', smv: '18,000' },
  'NM': { name: 'New Mexico', smv: '15,000' },
  'NE': { name: 'Nebraska', smv: '12,000' },
  'WV': { name: 'West Virginia', smv: '10,000' },
  'ID': { name: 'Idaho', smv: '8,000' },
  'HI': { name: 'Hawaii', smv: '5,000' },
  'NH': { name: 'New Hampshire', smv: '4,000' },
  'ME': { name: 'Maine', smv: '3,000' },
  'RI': { name: 'Rhode Island', smv: '2,000' },
  'MT': { name: 'Montana', smv: '1,500' },
  'DE': { name: 'Delaware', smv: '1,000' },
  'SD': { name: 'South Dakota', smv: '800' },
  'ND': { name: 'North Dakota', smv: '600' },
  'AK': { name: 'Alaska', smv: '400' },
  'VT': { name: 'Vermont', smv: '200' },
  'WY': { name: 'Wyoming', smv: '100' }
}

export default function USHeatMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Debug: Log coordinates to help identify where abbreviations are
    console.log(`Mouse at: x=${x}, y=${y}`)

    // Precise areas around state abbreviations based on actual coordinates
    let currentState: string | null = null

    // Using actual coordinates from your map with 20px by 20px detection areas
    if (x >= 90 && x <= 130 && y >= 540 && y <= 580) currentState = 'CA'
    else if (x >= 870 && x <= 910 && y >= 930 && y <= 970) currentState = 'TX'
    else if (x >= 1575 && x <= 1615 && y >= 1000 && y <= 1040) currentState = 'FL'
    else if (x >= 1700 && x <= 1740 && y >= 280 && y <= 320) currentState = 'NY'
    else if (x >= 1630 && x <= 1670 && y >= 405 && y <= 445) currentState = 'PA'
    else if (x >= 1190 && x <= 1230 && y >= 390 && y <= 430) currentState = 'IL'
    else if (x >= 1340 && x <= 1380 && y >= 370 && y <= 410) currentState = 'OH'
    else if (x >= 1490 && x <= 1530 && y >= 825 && y <= 865) currentState = 'GA'
    else if (x >= 1625 && x <= 1665 && y >= 660 && y <= 700) currentState = 'NC'
    else if (x >= 1240 && x <= 1280 && y >= 340 && y <= 380) currentState = 'MI'
    else if (x >= 1690 && x <= 1730 && y >= 390 && y <= 430) currentState = 'NJ'
    else if (x >= 1625 && x <= 1665 && y >= 565 && y <= 605) currentState = 'VA'
    else if (x >= 210 && x <= 250 && y >= 80 && y <= 120) currentState = 'WA'
    else if (x >= 160 && x <= 200 && y >= 230 && y <= 270) currentState = 'OR'
    else if (x >= 365 && x <= 405 && y >= 300 && y <= 340) currentState = 'ID'
    else if (x >= 235 && x <= 275 && y >= 480 && y <= 520) currentState = 'NV'
    else if (x >= 380 && x <= 420 && y >= 750 && y <= 790) currentState = 'AZ'
    else if (x >= 555 && x <= 595 && y >= 150 && y <= 190) currentState = 'MT'
    else if (x >= 580 && x <= 620 && y >= 355 && y <= 395) currentState = 'WY'
    else if (x >= 635 && x <= 675 && y >= 550 && y <= 590) currentState = 'CO'
    else if (x >= 1750 && x <= 1770 && y >= 280 && y <= 300) currentState = 'MA'
    else if (x >= 1400 && x <= 1420 && y >= 500 && y <= 520) currentState = 'TN'
    else if (x >= 1300 && x <= 1320 && y >= 400 && y <= 420) currentState = 'IN'
    else if (x >= 1100 && x <= 1120 && y >= 450 && y <= 470) currentState = 'MO'
    else if (x >= 1680 && x <= 1700 && y >= 450 && y <= 470) currentState = 'MD'
    else if (x >= 1150 && x <= 1170 && y >= 300 && y <= 320) currentState = 'WI'
    else if (x >= 1050 && x <= 1070 && y >= 300 && y <= 320) currentState = 'MN'
    else if (x >= 1590 && x <= 1630 && y >= 755 && y <= 795) currentState = 'SC'
    else if (x >= 1340 && x <= 1380 && y >= 590 && y <= 630) currentState = 'AL'
    else if (x >= 990 && x <= 1030 && y >= 690 && y <= 730) currentState = 'LA'
    else if (x >= 1290 && x <= 1330 && y >= 440 && y <= 480) currentState = 'KY'
    else if (x >= 890 && x <= 930 && y >= 490 && y <= 530) currentState = 'OK'
    else if (x >= 1710 && x <= 1750 && y >= 340 && y <= 380) currentState = 'CT'
    else if (x >= 590 && x <= 630 && y >= 390 && y <= 430) currentState = 'UT'
    else if (x >= 1090 && x <= 1130 && y >= 340 && y <= 380) currentState = 'IA'
    else if (x >= 940 && x <= 980 && y >= 490 && y <= 530) currentState = 'AR'
    else if (x >= 1190 && x <= 1230 && y >= 640 && y <= 680) currentState = 'MS'
    else if (x >= 840 && x <= 880 && y >= 390 && y <= 430) currentState = 'KS'
    else if (x >= 690 && x <= 730 && y >= 590 && y <= 630) currentState = 'NM'
    else if (x >= 990 && x <= 1030 && y >= 340 && y <= 380) currentState = 'NE'
    else if (x >= 1390 && x <= 1430 && y >= 390 && y <= 430) currentState = 'WV'
    else if (x >= 390 && x <= 430 && y >= 790 && y <= 830) currentState = 'HI'
    else if (x >= 1740 && x <= 1780 && y <= 240 && y <= 280) currentState = 'NH'
    else if (x >= 1855 && x <= 1895 && y >= 125 && y <= 165) currentState = 'ME'
    else if (x >= 1740 && x <= 1780 && y >= 240 && y <= 280) currentState = 'MA'
    else if (x >= 1710 && x <= 1750 && y >= 390 && y <= 430) currentState = 'RI'
    else if (x >= 1710 && x <= 1750 && y >= 340 && y <= 380) currentState = 'CT'
    else if (x >= 1740 && x <= 1780 && y >= 390 && y <= 430) currentState = 'NJ'
    else if (x >= 1670 && x <= 1710 && y >= 440 && y <= 480) currentState = 'DE'
    else if (x >= 1670 && x <= 1710 && y >= 440 && y <= 480) currentState = 'MD'
    else if (x >= 90 && x <= 210 && y >= 90 && y <= 210) currentState = 'AK'
    else if (x >= 390 && x <= 430 && y >= 790 && y <= 830) currentState = 'HI'

    if (currentState !== hoveredState) {
      setHoveredState(currentState)
    }

    if (currentState) {
      setTooltipPosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseLeave = () => {
    setHoveredState(null)
  }

  return (
    <div 
      ref={containerRef}
      className="w-full flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="/images/us-map.svg" 
        alt="US Heat Map" 
        className="w-full h-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      
      {/* Tooltip */}
      {hoveredState && stateData[hoveredState as keyof typeof stateData] && (
        <div
          className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg px-3 py-2 text-sm pointer-events-none"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-semibold text-gray-900">
            {stateData[hoveredState as keyof typeof stateData].name}
          </div>
          <div className="text-gray-600">
            $SMV: {stateData[hoveredState as keyof typeof stateData].smv}
          </div>
        </div>
      )}
    </div>
  )
}