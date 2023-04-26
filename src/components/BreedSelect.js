import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErorrMessage';

const ERROR_MSG =
  'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: null });
      const fetchedBreeds = await fetchBreeds();
      this.setState({ breeds: fetchedBreeds });
    } catch (error) {
      this.setState({ error: ERROR_MSG });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { breeds, isLoading, error } = this.state;
    const options = breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));

    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={option => this.props.onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
