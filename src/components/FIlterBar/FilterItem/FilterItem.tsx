import React, {FC} from 'react';
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {RootState} from "../../../store/store";
import {setSelected} from "../../../store/reducers/filterReducer/actionCreators";


interface IProps extends ConnectorProps {
    name: string,
    mark: string,
}

const FilterItem: FC<IProps> = ({name, mark, selected}) => {

    const dispatch = useDispatch();

    const handleChange = () => dispatch(setSelected(mark));

    return (
        <div className={'py-3 cursor-pointer'}>
            <input
                checked={selected === mark ? true : false}
                onChange={handleChange}
                name={'filter item'} type="radio"
                id={`filter-${name}`}
                className={'w-0'}
            />
            <label htmlFor={`filter-${name}`} className={'px-7 py-3 cursor-pointer'}>
                <span className={'border-b-[1px] border-dotted border-blue-500'}>{name}</span>
            </label>
        </div>
    );
}


const mapStateToProps = (state: RootState) => ({selected: state.selected});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(FilterItem);