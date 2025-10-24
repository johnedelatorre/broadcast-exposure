'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faChartBar,
  faChartLine,
  faCircleQuestion,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faCircleInfo,
  faDownload,
  faX,
  faSave,
  faArrowsRotate,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowDownShortWide,
  faBars,
  faShareNodes,
  faTshirt,
  faWrench,
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons'
import USHeatMap from '../../components/USHeatMap'
import SpursLogo, { SpursAvatarIcon } from '../../components/SpursLogo'

export default function BroadcastExposurePage() {
  const [measurementsExpanded, setMeasurementsExpanded] = useState(true)
  const [filtersExpanded, setFiltersExpanded] = useState(true)
  const [heatMapExpanded, setHeatMapExpanded] = useState(true)
  const [pageSpecificExpanded, setPageSpecificExpanded] = useState(true)
  const [audienceBreakdownExpanded, setAudienceBreakdownExpanded] = useState(true)
  const [teamAttribution, setTeamAttribution] = useState(false)
  const [hhViewership, setHhViewership] = useState(true)

  const tableData = Array(10).fill({
    event: 'FOX NFL Postgame',
    date: '10/01/2024',
    network: 'NBC Sports',
    m1825: '92,200',
    f1825: '92,200',
    m2535: '92,200',
    f3544: '1.84M',
    nb1825: '1.84M',
  })

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#E8E9EA] flex flex-col">
        {/* Logo */}
        <div className="h-[60px] flex items-center px-6 border-b border-black/[0.06]">
            <img
              src="/images/expanded-logo.png"
              alt="relo EDGE"
              className="h-8 w-auto"
            />
        </div>

        {/* Nav */}
        <nav className="flex-1 p-1 space-y-2">
          {/* Home */}
          <NavItem icon={faHome} label="Home" />
          
          {/* Measurements - Expanded */}
          <div className="px-1">
            <button
              onClick={() => setMeasurementsExpanded(!measurementsExpanded)}
              className="w-full flex items-center gap-2 px-6 py-2.5 rounded-lg hover:bg-black/5 justify-between"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChartBar} className="w-4 h-4 text-[#0480B2]" />
                <span className="text-sm text-[#0480B2]">Measurements</span>
              </div>
              <FontAwesomeIcon icon={measurementsExpanded ? faChevronDown : faChevronRight} className="w-3 h-3 text-black/90" />
            </button>
            
            {measurementsExpanded && (
              <div className="mt-1 py-1 bg-black/[0.02] rounded space-y-2">
                <SubNavItem label="Data Explorer" active />
                <SubNavItem label="Social Media Exposure" />
                <SubNavItem label="Broadcast Exposure" />
              </div>
            )}
          </div>

          {/* Connect Social */}
          <NavItemCollapsible icon={faShareNodes} label="Connect Social" />
          
          {/* Merchandising */}
          <NavItemCollapsible icon={faTshirt} label="Merchandising" />
          
          {/* Tools */}
          <NavItemCollapsible icon={faWrench} label="Tools" />
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col bg-white overflow-auto">
        {/* Header */}
        <header className="h-[60px] px-6 bg-[#E8E9EA] border-b border-black/[0.06] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded hover:bg-black/5 flex items-center justify-center" aria-label="Toggle menu">
              <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
            </button>
            <nav className="flex items-center gap-1 text-sm">
              <FontAwesomeIcon icon={faChartBar} className="w-3.5 h-3.5 text-black/45" />
              <span className="text-black/45 px-1">Measurements</span>
              <span className="text-black/45">/</span>
              <span className="text-black/90 px-1">Broadcast Exposure</span>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm">Team RH Attribution</label>
            <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-black/45" />
            <ToggleSwitch checked={teamAttribution} onChange={setTeamAttribution} />
            <label className="text-sm">League RH Attribution</label>
            <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-black/45" />
            <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700" aria-label="Help">
              <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-white" />
            </button>
            <SpursAvatarIcon className="w-8 h-8" />
          </div>
        </header>

        {/* Team Header */}
        <div className="px-6 py-3 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-3">
            <SpursLogo className="w-16 h-16 flex-shrink-0" />
            <h1 className="text-3xl font-semibold">San Antonio Spurs</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {/* Title & Tabs */}
          <div className="px-6 bg-white sticky top-0 z-10">
            <h2 className="text-base font-semibold pt-6 pb-2">Broadcast Exposure</h2>
            
            <div className="flex items-center justify-between border-b border-black/[0.06]">
              <div className="flex gap-8">
                <TabButton icon={faChartLine} label="Viewership" />
                <TabButton icon={faChartBar} label="Sample Exposures" />
                <TabButton icon={faChartBar} label="Audience Breakdown" active />
              </div>

              <div className="flex items-center gap-3 pb-3">
                <label className="text-sm">HH Viewership</label>
                <ToggleSwitch checked={hhViewership} onChange={setHhViewership} />
                <label className="text-sm">Ind. Viewership</label>
                <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-black/45" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="p-6">
            <div className="border border-black/25 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setFiltersExpanded(!filtersExpanded)}
                className="w-full px-4 py-3 bg-black/[0.02] border-b border-[#D9D9D9] flex items-center gap-3"
              >
                <span className="text-sm">Sort Filters</span>
                <FontAwesomeIcon icon={faCircleInfo} className="w-3.5 h-3.5 text-black/45" />
                <div className="flex gap-2 ml-2">
                  <span className="px-2 py-0.5 bg-[#E6F4FF] border border-[#0480B2] rounded text-xs">
                    <span className="font-semibold text-[#0480B2]">From:</span>
                    <span className="text-[#0480B2]"> 2023-11-02</span>
                  </span>
                  <span className="px-2 py-0.5 bg-[#E6F4FF] border border-[#0480B2] rounded text-xs">
                    <span className="font-semibold text-[#0480B2]">To:</span>
                    <span className="text-[#0480B2]"> 2024-11-02</span>
                  </span>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon icon={faChevronDown} className={`w-4 h-4 transition-transform ${!filtersExpanded && '-rotate-90'}`} />
                </div>
              </button>

              {filtersExpanded && (
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-5 gap-3">
                    <FilterSelect label="Rightsholders" placeholder="Select Rightsholders" />
                    <FilterSelect label="Sponsors" placeholder="Select Sponsors" />
                    <FilterSelect label="Placement Types" placeholder="Select Placement Types" />
                    <FilterSelect label="Placements" placeholder="Select Placements" />
                    <DateRangeInput />
                  </div>

                  <CollapsibleSection 
                    title="Page Specific Metrics" 
                    expanded={pageSpecificExpanded}
                    onToggle={() => setPageSpecificExpanded(!pageSpecificExpanded)}
                  />

                  {pageSpecificExpanded && (
                    <div className="grid grid-cols-5 gap-3">
                      <FilterSelect label="Broadcast Country" placeholder="Select Broadcast Country" />
                      <FilterSelect label="Network" placeholder="Select Network" />
                      <FilterSelect label="Broadcast Name" placeholder="Select Broadcast Name" />
                      <FilterSelect label="Account Type" placeholder="Select Account Type" />
                      <FilterSelect label="Collections" placeholder="Select Collections" />
                    </div>
                  )}

                  <CollapsibleSection 
                    title="Audience Breakdown" 
                    expanded={audienceBreakdownExpanded}
                    onToggle={() => setAudienceBreakdownExpanded(!audienceBreakdownExpanded)}
                  />

                  {audienceBreakdownExpanded && (
                    <div className="grid grid-cols-3 gap-3">
                      <FilterSelect label="Audience Type" placeholder="Select Audience Type" />
                      <FilterSelect label="Age Brackets" placeholder="Select Brackets" />
                      <FilterSelect label="Gender" placeholder="Select Gender" />
                    </div>
                  )}

                  <div className="flex justify-end gap-2 pt-2">
                    <button className="px-3 h-8 bg-black text-white rounded text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faX} className="w-3 h-3" />
                      Clear All Filters
                    </button>
                    <button className="px-3 h-8 border border-[#0480B2] text-[#0480B2] rounded text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faSave} className="w-3 h-3" />
                      Save Filters
                    </button>
                    <button className="px-3 h-8 bg-[#0480B2] text-white rounded text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faArrowsRotate} className="w-3 h-3" />
                      Update Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="px-6 pb-6">
            <div className="border border-[#BFBFBF] rounded-lg bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Audience Breakdown By Broadcast</h2>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 border border-[#0480B2] text-[#0480B2] rounded flex items-center justify-center" aria-label="Information">
                      <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4" />
                    </button>
                    <button className="px-3 h-8 bg-[#0480B2] text-white rounded text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
                      Download As CSV
                    </button>
                  </div>
                </div>

                <div className="border border-black/[0.06] rounded overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#A3BDC7]">
                        {['Event', 'Broadcast Date', 'Network', 'M 18-25', 'F 18-25', 'M 25-35', 'F 35-44', 'NB 18-25'].map(h => (
                          <th key={h} className="px-4 py-3 text-left font-semibold text-[#045778] border-r border-white/30 last:border-0">
                            <div className="flex items-center gap-2">
                              {h}
                              <FontAwesomeIcon icon={faSort} className="w-4 h-4 text-[#045778]/70" />
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-black/[0.02]' : 'bg-white'}>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.event}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.date}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.network}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.m1825}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.f1825}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.m2535}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.f3544}</td>
                          <td className="px-4 py-3 border-b border-black/[0.06]">{row.nb1825}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button className="w-8 h-8 text-black/25" disabled aria-label="Previous page">
                    <FontAwesomeIcon icon={faAngleLeft} className="w-3 h-3" />
                  </button>
                  <button className="w-8 h-8 border border-[#0480B2] text-[#0480B2] font-semibold text-sm rounded" aria-label="Page 1, current page">1</button>
                  {[2,3,4,5].map(n => (
                    <button key={n} className="w-8 h-8 text-sm hover:bg-black/5 rounded" aria-label={`Page ${n}`}>{n}</button>
                  ))}
                  <button className="w-8 h-8" aria-label="Next page">
                    <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Heat Map */}
          <div className="px-6 pb-6">
            <div className="border border-[#BFBFBF] rounded-lg bg-white">
              <div className="w-full px-6 py-4 border-b border-[#D9D9D9] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">Age Demographics — Viewership Heat Map</h2>
                  <button className="px-3 h-8 bg-[#0480B2] text-white rounded text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                    Download As PNG
                  </button>
                </div>
                <button 
                  onClick={() => setHeatMapExpanded(!heatMapExpanded)}
                  className="p-2 hover:bg-black/5 rounded"
                  aria-label={heatMapExpanded ? "Collapse heat map" : "Expand heat map"}
                >
                  <FontAwesomeIcon icon={heatMapExpanded ? faChevronUp : faChevronDown} className="w-4 h-4" />
                </button>
              </div>

              {heatMapExpanded && (
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium">Share of Exposure (% of viewer-minutes)</div>
                    <div className="h-2 rounded-full" style={{ background: 'linear-gradient(90deg, #89E9B8 0%, #25B771 33%, #179B62 66%, #097F54 100%)' }} />
                    <div className="text-xs">
                      <span className="font-bold">Basis:</span> Household • 
                      <span className="font-bold"> Gender:</span> All • 
                      <span className="font-bold"> Age:</span> All Ages • 
                      <span className="font-bold"> Segment:</span> All
                    </div>
                  </div>

                  <p className="text-sm mb-6">Shows each state&apos;s share of total viewer-minutes for the selected gender/age and basis.</p>

                  <div className="w-full">
                    <USHeatMap />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label }: any) {
  return (
    <div className="px-1">
      <button className="w-full flex items-center gap-2 px-6 py-2.5 rounded-lg hover:bg-black/5">
        <FontAwesomeIcon icon={icon} className="w-4 h-4 text-black/90" />
        <span className="text-sm text-black/65">{label}</span>
      </button>
    </div>
  )
}

function NavItemCollapsible({ icon, label }: any) {
  return (
    <div className="px-1">
      <button className="w-full flex items-center gap-2 px-6 py-2.5 rounded-lg hover:bg-black/5 justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="w-4 h-4 text-black/90" />
          <span className="text-sm text-black/65">{label}</span>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 text-black/90" />
      </button>
    </div>
  )
}

function SubNavItem({ label, active }: any) {
  return (
    <button className={`w-full text-left px-12 py-2.5 rounded-lg text-sm ${
      active 
        ? 'text-[#0480B2] bg-[#A3BDC7]/30' 
        : 'text-black/65 hover:bg-black/5'
    }`}>
      {label}
    </button>
  )
}

function TabButton({ icon, label, active }: any) {
  return (
    <button className={`flex items-center gap-2 py-3 text-sm border-b-2 ${
      active ? 'text-[#0480B2] border-[#0480B2] font-semibold' : 'text-black/90 border-transparent'
    }`}>
      <FontAwesomeIcon icon={icon} className={`w-4 h-4 ${active ? 'text-[#0480B2]' : 'text-black/45'}`} />
      {label}
    </button>
  )
}

function ToggleSwitch({ checked, onChange }: any) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-11 h-[22px] rounded-full relative ${checked ? 'bg-[#0480B2]' : 'bg-gray-300'}`}
    >
      <div className={`absolute top-0.5 w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform ${checked ? 'right-0.5' : 'left-0.5'}`} />
    </button>
  )
}

function FilterSelect({ label, placeholder }: any) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <label className="text-sm">{label}</label>
        <FontAwesomeIcon icon={faCircleInfo} className="w-3.5 h-3.5 text-black/45" />
      </div>
      <button className="px-3 h-8 bg-white border border-black/15 rounded text-sm text-left flex items-center justify-between">
        <span className="text-black/60">{placeholder}</span>
        <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 text-black/25" />
      </button>
    </div>
  )
}

function DateRangeInput() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <label className="text-sm">Season Year or Date Range</label>
        <FontAwesomeIcon icon={faCircleInfo} className="w-3.5 h-3.5 text-black/45" />
      </div>
      <div className="px-3 h-8 bg-white border border-black/15 rounded flex items-center gap-2 text-sm">
        <span>2023-11-02</span>
        <span className="text-black/25">—</span>
        <span>2024-11-02</span>
        <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 text-black/25 ml-auto" />
      </div>
    </div>
  )
}

function CollapsibleSection({ title, expanded, onToggle }: { title: string, expanded: boolean, onToggle: () => void }) {
  return (
    <div className="bg-black/[0.02] border border-black/15 rounded">
      <button 
        onClick={onToggle}
        className="w-full px-3 py-2.5 flex items-center gap-2 text-sm"
      >
        <FontAwesomeIcon 
          icon={expanded ? faChevronDown : faChevronRight} 
          className="w-3 h-3" 
        />
        {title}
      </button>
    </div>
  )
}

