import React, {FC} from 'react';
import DirectionItem from "./DirectionItem/DirectionItem";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store/store";

interface IProps extends ConnectorProps {
}

const DirectionShowcase: FC<IProps> = ({items, selected}) => {
    return (
        <div className={'flex justify-center self-center'}>
            <div
                className={'box-border md:max-w-[1000px] sm:max-w-full self-center flex-wrap sm:flex-col sm:items-center md:flex-row md:items-stretch flex justify-start mb-16'}>
                {
                    items.filter(item => item.tags.some(tag => tag === selected || selected === 'Всё')).map(item =>
                        <DirectionItem
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                        />)
                }
            </div>
        </div>
    );
}


const mapStateToProps = (state: RootState) => ({
    items: state.direction.items,
    selected: state.filter.selected,
});

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(DirectionShowcase);