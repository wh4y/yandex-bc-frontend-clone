import React, {FC} from 'react';
import {RootState} from "../../store/store";
import {connect, ConnectedProps} from "react-redux";
import FilterItem from "./FilterItem/FilterItem";

interface IProps extends ConnectorProps {
}

const FilterBar: FC<IProps> = ({filterItems}) => {
    return (
        <div className={'md-:text-[1.1em] xs:text-[.9em] relative flex justify-center items-start xs:pt-16 md-:pt-24'}>
            <form className={'flex md-:w-[66%] xs:w-[90%] justify-center mb-16'}>
                <fieldset className={'flex flex-wrap justify-center'}>
                    {
                        filterItems.map(item => <FilterItem name={item.name}/>)
                    }
                </fieldset>
            </form>
        </div>
    );
}


const mapStateToProps = (state: RootState) => ({filterItems: state.filter.filterItems});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(FilterBar);