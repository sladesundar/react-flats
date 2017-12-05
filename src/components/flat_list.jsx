import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    props.flatData.map((flat) => {
      return <Flat flatInfo={flat} key={flat.name} selectedFlat={props.selectedFlat} changeSelectedFlat={props.changeSelectedFlat} />
    })
  )
};

export default FlatList;
