import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

//apis
import { fetchRestaurants } from '../apis/restaurants';

//images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.ong';

const HeaderWrapper = styled.div
display: flex;
justify - content: flex - start;

export const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants().then((data) =>
      console.log(data))
  }, [])

  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )

}
