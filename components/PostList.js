import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
	query {
		tours {
			_id
			name
			imageCover
			slug
			duration
			createdAt
			price
			startLocation {
				description
			}
			author {
				_id
				name
				photo
			}
		}
	}
`;


export default function PostList() {
    const { loading, error, data } = useQuery(ALL_POSTS_QUERY,
        {
            // Setting this value to true will make the component rerender when
            // the "networkStatus" changes, so we are able to know if it is fetching
            // more data
            notifyOnNetworkStatusChange: true,
        }
    )

    if (error) return <h1>ERROR WHILE FETCHING</h1>
    if (loading) return <div>Loading</div>

    const { tours } = data

    return (
        <section>
            <ul>
                {tours.map((tour, index) => (
                    <li key={tour._id}>
                        <div>
                            <span>{index + 1} </span>
                            <a href={tour.slug}>{tour.name}</a>
                        </div>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
        </section>
    )
}