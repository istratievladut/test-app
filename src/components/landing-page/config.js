import dashboardIcon from '../../assets/dashboard.png';
import incidentsIcon from '../../assets/incidents.png';
import networkIcon from '../../assets/network.png';
import riskManagementIcon from '../../assets/risk_management.png';
import policiesIcon from '../../assets/policies.png';
import reportsIcon from '../../assets/reports.png';
import quarantineIcon from '../../assets/quarantine.png';
import companiesIcon from '../../assets/companies.png';
import accountsIcon from '../../assets/accounts.png';
import sandboxAnalyzerIcon from '../../assets/sandbox_analyzer.png';
import helpIcon from '../../assets/help.png';
import whatsnewIcon from '../../assets/whatsnew.png';

const menuItemsList = [
    {
        label: 'Dashboard',
        icon: dashboardIcon
    },
    {
        label: 'Incidents',
        icon: incidentsIcon
    },
    {
        label: 'Network',
        icon: networkIcon
    },
    {
        label: 'Risk Management',
        icon: riskManagementIcon
    },
    {
        label: 'Policies',
        icon: policiesIcon
    },
    {
        label: 'Reports',
        icon: reportsIcon
    },
    {
        label: 'Quarantine',
        icon: quarantineIcon
    },
    {
        label: 'Companies',
        icon: companiesIcon
    },
    {
        label: 'Accounts',
        icon: accountsIcon
    },
    {
        label: 'Sandbox analyzer',
        icon: sandboxAnalyzerIcon
    }
];

const headerButtons = [
    {
        label: 'help',
        icon: helpIcon
    },
    {
        label: 'whatsnew',
        icon: whatsnewIcon
    }
];

export {menuItemsList, headerButtons};