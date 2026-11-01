import test from 'node:test'
import assert from 'node:assert/strict'

import { profile } from '../src/data/profile.js'
import { projects } from '../src/data/projects.js'
import { experiences } from '../src/data/experience.js'
import { skillCategories, currentlyLearning } from '../src/data/skills.js'
import { principles } from '../src/data/principles.js'

test('Profile Configuration Integrity for Abdellah Aregaw', () => {
  assert.equal(profile.fullName, 'Abdellah Aregaw')
  assert.equal(profile.preferredName, 'Abdellah Aregaw')
  assert.equal(profile.university, 'Arba Minch University')
  assert.ok(profile.location.includes('Kombolcha'))
  assert.equal(profile.expectedGraduation, 2027)
  assert.equal(profile.contact.email, 'abdellaharegaw616@gmail.com')
  assert.equal(profile.contact.phone, '+251945801156')
  assert.equal(profile.links.github, 'https://github.com/abdellaharegaw616-web')
  assert.ok(profile.hero.badge.includes('SOFTWARE ENGINEERING STUDENT'))
  assert.ok(profile.hero.bio.includes('Arba Minch University'))
  assert.equal(profile.stats.length, 3)
  assert.equal(profile.stats[0].label, 'FOCUS')
  assert.equal(profile.stats[1].label, 'CURRENT STACK')
  assert.equal(profile.stats[2].label, 'EDUCATION')
})

test('Four Main Projects Integrity', () => {
  assert.ok(Array.isArray(projects))
  assert.equal(projects.length, 4, 'Must have exactly 4 main student projects')

  // Project 01: ShopNest Ethiopia
  const shopnest = projects.find((p) => p.id === 'shopnest')
  assert.ok(shopnest, 'ShopNest Ethiopia project must exist')
  assert.equal(shopnest.title, 'ShopNest Ethiopia')
  assert.ok(shopnest.technologies.includes('MongoDB'))
  assert.ok(shopnest.technologies.includes('Express.js'))
  assert.ok(shopnest.technologies.includes('React.js'))
  assert.ok(shopnest.technologies.includes('Node.js'))
  assert.equal(shopnest.sourceUrl, 'https://github.com/abdellaharegaw616-web/SHOPNEST-ETHIOPIA')
  assert.ok(shopnest.features.length >= 5)

  // Project 02: EthioJobs Finder
  const ethiojobs = projects.find((p) => p.id === 'ethiojobs')
  assert.ok(ethiojobs, 'EthioJobs Finder project must exist')
  assert.equal(ethiojobs.title, 'EthioJobs Finder')
  assert.ok(ethiojobs.technologies.includes('React.js'))
  assert.ok(ethiojobs.technologies.includes('Node.js'))
  assert.equal(ethiojobs.sourceUrl, 'https://github.com/abdellaharegaw616-web/-EthioJobFinder')
  assert.equal(ethiojobs.liveUrl, 'https://ethio-jobs-finder.vercel.app')
  assert.equal(ethiojobs.hasLiveDemo, true)

  // Project 03: TaskFlow Project Management System
  const taskflow = projects.find((p) => p.id === 'taskflow')
  assert.ok(taskflow, 'TaskFlow project must exist')
  assert.equal(taskflow.title, 'TaskFlow Project Management System')
  assert.ok(taskflow.technologies.includes('React.js'))
  assert.ok(taskflow.technologies.includes('Node.js'))
  assert.ok(taskflow.technologies.includes('Express.js'))
  assert.ok(taskflow.technologies.includes('MongoDB'))
  assert.ok(taskflow.technologies.includes('Tailwind CSS'))
  assert.ok(taskflow.engineeringFocus.length > 10, 'Must have engineering focus note')
  assert.equal(
    taskflow.sourceUrl,
    'https://github.com/abdellaharegaw616-web/Task-Flow-Project-Management-System'
  )
  assert.equal(
    taskflow.liveUrl,
    'https://task-flow-project-management-system-three.vercel.app/'
  )
  assert.equal(taskflow.hasLiveDemo, true)

  // Project 04: AMU Navigation System
  const amuNav = projects.find((p) => p.id === 'amu-navigation')
  assert.ok(amuNav, 'AMU Navigation System project must exist')
  assert.equal(amuNav.title, 'AMU Navigation System')
  assert.ok(amuNav.technologies.includes('React.js'))
  assert.ok(amuNav.technologies.includes('MongoDB'))
})

test('Education & Background Integrity', () => {
  assert.ok(Array.isArray(experiences))
  assert.equal(experiences.length, 2)

  const amu = experiences.find((e) => e.id === 'amu-education')
  assert.ok(amu, 'Arba Minch University education must exist')
  assert.equal(amu.organization, 'Arba Minch University')
  assert.ok(amu.isEducation)

  const selfDev = experiences.find((e) => e.id === 'independent-development')
  assert.ok(selfDev, 'Independent technical development must exist')
  assert.ok(selfDev.technologies.includes('React.js'))
  assert.ok(selfDev.technologies.includes('MongoDB'))
  assert.ok(selfDev.technologies.includes('Node.js'))
})

test('Skills Toolkit Integrity', () => {
  assert.ok(Array.isArray(skillCategories))
  assert.equal(skillCategories.length, 4)

  const categoryIds = skillCategories.map((c) => c.id)
  assert.deepEqual(categoryIds, ['frontend', 'backend', 'database', 'engineering'])

  const frontend = skillCategories.find((c) => c.id === 'frontend')
  assert.ok(frontend.skills.some((s) => s.name.includes('React.js')))

  const backend = skillCategories.find((c) => c.id === 'backend')
  assert.ok(backend.skills.some((s) => s.name.includes('Node.js')))

  const database = skillCategories.find((c) => c.id === 'database')
  assert.ok(database.skills.some((s) => s.name.includes('MongoDB')))

  assert.ok(Array.isArray(currentlyLearning))
  assert.ok(currentlyLearning.length >= 3)
})

test('Engineering Principles Integrity', () => {
  assert.ok(Array.isArray(principles))
  assert.equal(principles.length, 8, 'Must have 8 engineering principles')

  const titles = principles.map((p) => p.title.toLowerCase())
  assert.ok(titles.includes('correctness'))
  assert.ok(titles.includes('security'))
  assert.ok(titles.includes('testability'))
  assert.ok(titles.includes('maintainability'))
  assert.ok(titles.includes('reliability'))
  assert.ok(titles.includes('accessibility'))
  assert.ok(titles.includes('performance'))
  assert.ok(titles.includes('deployment readiness'))
})

test('Identity Isolation: Zero Unrelated Reference Checks', () => {
  const profileStr = JSON.stringify(profile).toLowerCase()
  const projectsStr = JSON.stringify(projects).toLowerCase()
  const expStr = JSON.stringify(experiences).toLowerCase()

  assert.ok(!profileStr.includes('alferid'), 'Profile must not mention Alferid')
  assert.ok(!projectsStr.includes('owepay'), 'Projects must not mention OwePay')
  assert.ok(!projectsStr.includes('freakfm'), 'Projects must not mention FreakFM')
  assert.ok(!expStr.includes('myseed'), 'Experience must not mention MySeed')
  assert.ok(!expStr.includes('ibex'), 'Experience must not mention Ibex')
})
