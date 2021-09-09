import React from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './photos.js'
import './Photography.scss'

export const Photography = () => (
  <>
    <div className="photography-wrapper">
      <Gallery photos={photos} columns={100} />
    </div>
  </>
)
