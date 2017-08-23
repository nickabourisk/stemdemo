import {UI, CardPanel, Level, Table, Button} from "ui/UI";
import {WhitepaperStore} from "./WhitepaperStore";

class WhitepaperTable extends Table {
    setColumns() {
        const cellStyle = {
            textAlign: "left",
            verticalAlign: "middle"
        };
        const headerStyle = cellStyle;

        let columns = [{
            value: whitepaper => whitepaper.name,
            headerName: "Whitepaper name",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }, {
            value: whitepaper => whitepaper.getAuthor(),
            headerName: "Author",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }, {
            value: whitepaper => {
                return <Button level={Level.ERROR}>Delete</Button>
            },
            headerName: "Button",
            headerStyle: headerStyle,
            cellStyle: cellStyle
        }];
        super.setColumns(columns);
    }

    getEntries() {
        return WhitepaperStore.all();
    }
}


export class WhitepaperList extends UI.Element {
    render() {
        return [
            <h1>All whitepapers</h1>,
            <WhitepaperTable/>
        ]
    }
}