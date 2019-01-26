import FreeLanceContent from "./freelance"
import VisionContent from "./vision"
import WhoIam from "./whoiam"
import WorkWithMe from "./workwithme"

export default () => (
    <div id="about-content">
        <WhoIam />  
        <WorkWithMe/>
        <VisionContent />
        <FreeLanceContent />
    </div>
)