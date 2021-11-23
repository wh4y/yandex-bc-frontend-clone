import React, {FC} from 'react';
import {RootState} from "../../store/store";
import {connect, ConnectedProps} from "react-redux";
import FilterItem from "./FilterItem/FilterItem";

interface IProps extends ConnectorProps {
}

const FilterBar: FC<IProps> = ({filterItems}) => {
    return (
        <div className={'text-[1.1em] relative flex justify-center items-start pt-24'}>
            <form className={'flex w-[66%] justify-center mb-16'}>
                <fieldset className={'flex flex-wrap justify-center'}>
                    {
                        filterItems.map(item => <FilterItem name={item.name} mark={item.mark}/>)
                    }
                </fieldset>
            </form>
        </div>
    );
}


const mapStateToProps = (state: RootState) => ({filterItems: state.filterItems});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(FilterBar);