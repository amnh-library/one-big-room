import React from 'react';

export default class BiodiversityResults extends React.Component {
  render() {
    let result = this.props.result || [];
    let title_items = result.title_items || [];

    if (title_items.length > 0) {
      return (
        <div>
          {title_items.map(function (title_item, index) {
            return (
              <div key={title_item.title_id}>
                <a href="title_item.title_url">
                  <img src={title_item.item_thumbnail_url} height="150" alt={title_item.short_title}/>
                  <br/>
                  {title_item.short_title}
                </a>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}
