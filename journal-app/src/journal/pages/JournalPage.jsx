import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";



export const JournalPage = () => {
    return (

        <JournalLayout>
            {/* <Typography variant='h1' >Lorem ipsum</Typography> */}
            {/* <NothingSelectedView /> */}
            <NoteView/>
        </JournalLayout>
        
    )

}