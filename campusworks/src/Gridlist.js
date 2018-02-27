import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import picture from './picture.jpg';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
    border: 'solid',
  },
};

const tilesData = [
  {
    img: picture,
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: picture,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      cols={1}
      style={styles.gridList}
    >
      <Subheader>Work Orders</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="yellow" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
        <div>
            <FloatingActionButton>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    </GridList>

  </div>
);

export default GridListExampleSimple;