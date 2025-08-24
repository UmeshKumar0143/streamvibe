import { getCurrentUser} from "@/app/actions/current-User";
import Toogle from "./Toogle";
import Wrapper from "./Wrapper";
import RecommendedUser from "./RecommendedUsers";

export default async function Sidebar(){
    await getCurrentUser(); 
    return <div>
        <Wrapper>
            <Toogle/>
            <div>
                <RecommendedUser/>
            </div>
        </Wrapper>
        </div>
}