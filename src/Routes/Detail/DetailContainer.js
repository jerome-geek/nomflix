import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }

    const { isMovie } = this.state;
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error: 'Can not find anything ' });
    } finally {
      this.setState({ loading: false, result });
    }
  };

  render() {
    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
