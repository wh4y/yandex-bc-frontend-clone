import React, {FC} from 'react';
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {RootState} from "../../../store/store";
import {setSelected} from "../../../store/reducers/filterReducer/actionCreators";


interface IProps extends ConnectorProps {
    name: string,
}

const FilterItem: FC<IProps> = ({name, selected}) => {

    const dispatch = useDispatch();

    const handleChange = () => dispatch(setSelected(name));

    return (
        <div className={'py-3 cursor-pointer'}>
            <input
                checked={selected === name ? true : false}
                onChange={handleChange}
                name={'filter item'} type="radio"
                id={`filter-${name}`}
                className={'w-0'}
            />
            <label htmlFor={`filter-${name}`} className={'px-7 py-3 cursor-pointer'}>
                <span className={'whitespace-nowrap border-b-[1px] border-dotted border-blue-500'}>{name}</span>
            </label>
        </div>
    );
}


const mapStateToProps = (state: RootState) => ({selected: state.filter.selected});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(FilterItem);