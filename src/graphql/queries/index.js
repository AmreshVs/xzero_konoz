import { gql } from '@apollo/client';

export const VOUCHERS = gql`
  query{
    vouchers(where: {
      draw_status: "closed"
    }){
      id
      featured_img{
        url
      }
      buy_title_en
      win_title_en
      limit
      draw_status
    }
  }
`;