import React, {Component} from "react"
import Link from "gatsby-link"

class MainMenu extends Component {
    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
        console.log(data)

        return (
            <div className="menu-container"
            style={{
                background: 'rebeccapurple',
                marginBottom: '1.45rem',
              }}
            >
               
                <ul className="menu-ul">
                    {data.map((item,index) =>
                        <li key={index} className="menu-li">
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default MainMenu