
import { Calendar, Badge } from 'antd';

export const CalendarVaccine = () => {

    const getListData= (value: { date: () => any; })=> {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'error', content: 'This is error event 1.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    const dateCellRender=(value: { date: () => any; })=> {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={"success"} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    const getMonthData=(value: { month: () => number; })=> {
        if (value.month() === 8) {
            return 1394;
        }
    }

    const monthCellRender=(value: { month: () => number; })=> {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    return (
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
 
    )
}

