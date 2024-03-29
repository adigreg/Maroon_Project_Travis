import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import PageThree from './PageThree.js';
import { ExpansionPanelActions } from '@material-ui/core';
import { getByTestId } from '@testing-library/dom';

test('After pressing search button on page 1, page 2 renders', () => {
    const setdoctest = jest.fn();
    const setpagetest = jest.fn();
    const doctortest = {
        "practices": [{
            "location_slug": "ca-oakland",
            "within_search_area": true,
            "distance": 11.245006427577161,
            "lat": 37.82312,
            "lon": -122.25835,
            "uid": "e5706cec1b5ed179f5964f09bd494160",
            "name": "The Permanente Medical Group - Oakland Medical Center",
            "website": "https://mydoctor.kaiserpermanente.org/ncal/provider/davidlaw#tab%7C2%7C1%7CProfessional%7C/ncal/provider/davidlaw/about/professional?professional=aboutme.xml&ctab=About+Me&cstab=Professional&to=1&sto=0",
            "accepts_new_patients": true,
            "insurance_uids": ["blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix", "healthnet-healthnetindividualfamilyppohix", "anthem-blueviewvision", "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix", "cigna-vision", "vsp-vsp", "healthnet-healthnetcommunitycarenetworkhmohix", "medicare-medicare", "medicaid-medicaid", "aetna-aetnamdbronzesilverandgoldhmo", "healthnet-bluegoldhmo", "healthnet-hmoexcelcaresilvernetwork", "healthnet-hmoexcelcaresilvernetworkmedicarecob", "anthembluecrossblueshield-golddirectaccesspluswhsa", "anthembluecrossblueshield-bronzedirectaccessplusgjqa", "healthnet-healthnetcabluegoldhmo", "kaiserpermanente-kaiserpermanente"],
            "visit_address": {
                "city": "Oakland",
                "lat": 37.82312,
                "lon": -122.25835,
                "state": "CA",
                "state_long": "California",
                "street": "3600 Broadway",
                "zip": "94611"
            },
            "office_hours": [],
            "phones": [{
                "number": "5107525438",
                "type": "landline"
            }],
            "languages": [{
                "name": "English",
                "code": "en"
            }]
        }, {
            "location_slug": "ca-oakland",
            "within_search_area": true,
            "distance": 11.30441310280742,
            "lat": 37.823775,
            "lon": -122.25766,
            "uid": "1a24099086b7bde437853c0282ba5aff",
            "name": "Kaiser Foundation Hospitals",
            "website": "https://mydoctor.kaiserpermanente.org/ncal/provider/craigshilton#tab%7C3%7C%7COffices%20&%20Directions%7C/ncal/provider/craigshilton/offices/?ctab=Offices+%2526+Directions&to=2",
            "accepts_new_patients": true,
            "insurance_uids": ["aetna-aetnamanagedchoiceposopenaccess", "aetna-aetnahmo", "aetna-aetnasignatureadministratorsppo", "aetna-aetnachoiceposii", "aetna-aetnahmodeductibleplancamembersonly", "bcbsbluecard-bcbsbluecardppo", "bluecrosscalifornia-bluecrosscappo", "bluecrosscalifornia-bluecrosscaadvantageppopreferreddirectaccessplus", "healthnet-healthnetcaindividualfamilyppo", "healthnet-healthnetcalargegroupppo", "healthnet-healthnetcacoveredcaliforniapposmallgroup", "bluecrosscalifornia-bluecrosscacaliforniacarehmo", "bluecrosscalifornia-bluecrosscaselectplushmo", "anthem-blueviewvision", "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix", "blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix", "healthnet-healthnetindividualfamilyppohix", "premerabcbs-premeraheritagesignaturehix", "medicaid-medicaid", "medicare-medicare", "aetna-aetnamdbronzesilverandgoldhmo", "healthnet-bluegoldhmo", "healthnet-hmoexcelcaresilvernetwork", "healthnet-hmoexcelcaresilvernetworkmedicarecob"],
            "visit_address": {
                "city": "Oakland",
                "lat": 37.823775,
                "lon": -122.25766,
                "state": "CA",
                "state_long": "California",
                "street": "275 W MacArthur Blvd",
                "street2": "Fl 12",
                "zip": "94611"
            },
            "office_hours": [],
            "phones": [{
                "number": "5107526813",
                "type": "landline"
            }],
            "languages": [{
                "name": "English",
                "code": "en"
            }]
        }, {
            "location_slug": "ca-oakland",
            "within_search_area": true,
            "distance": 11.383757535151988,
            "lat": 37.82471,
            "lon": -122.25676,
            "uid": "17777d8ed018f0c5287a3beff7596773",
            "name": "Kaiser Permanente Oakland Medical Center",
            "website": "https://mydoctor.kaiserpermanente.org/ncal/provider/dennishuynh#tab%7C2%7C1%7CProfessional%7C/ncal/provider/dennishuynh/about/professional?professional=aboutme.xml&ctab=About+Me&cstab=Professional&to=1&sto=0",
            "accepts_new_patients": true,
            "insurance_uids": ["aetna-aetnamanagedchoiceposopenaccess", "aetna-aetnahmo", "aetna-aetnasignatureadministratorsppo", "aetna-aetnachoiceposii", "aetna-aetnahmodeductibleplancamembersonly", "bcbsbluecard-bcbsbluecardppo", "bluecrosscalifornia-bluecrosscappo", "bluecrosscalifornia-bluecrosscaadvantageppopreferreddirectaccessplus", "healthnet-healthnetcaindividualfamilyppo", "healthnet-healthnetcalargegroupppo", "healthnet-healthnetcacoveredcaliforniapposmallgroup", "bluecrosscalifornia-bluecrosscacaliforniacarehmo", "bluecrosscalifornia-bluecrosscaselectplushmo", "anthem-blueviewvision", "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix", "blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix", "healthnet-healthnetindividualfamilyppohix", "premerabcbs-premeraheritagesignaturehix", "medicaid-medicaid", "medicare-medicare", "aetna-aetnamdbronzesilverandgoldhmo", "healthnet-bluegoldhmo", "healthnet-hmoexcelcaresilvernetwork", "healthnet-hmoexcelcaresilvernetworkmedicarecob"],
            "visit_address": {
                "city": "Oakland",
                "lat": 37.82471,
                "lon": -122.25676,
                "state": "CA",
                "state_long": "California",
                "street": "3801 Howe St",
                "zip": "94611"
            },
            "office_hours": [],
            "phones": [{
                "number": "5107521190",
                "type": "landline"
            }],
            "languages": [{
                "name": "English",
                "code": "en"
            }]
        }],
        "educations": [{
            "school": "University of Cincinnati College of Medicine",
            "degree": "MD"
        }, {
            "school": "San Joaquin General Hospital",
            "graduation_year": "1988",
            "degree": "Residency"
        }, {
            "school": "Kaiser Permanente Medical Center Oakland CA",
            "graduation_year": "1991",
            "degree": "Residency"
        }, {
            "school": "San Joaquin General Hospital",
            "graduation_year": "1992",
            "degree": "Residency"
        }, {
            "school": "Cleveland Clinic Foundation",
            "graduation_year": "1995",
            "degree": "Fellowship"
        }],
        "profile": {
            "first_name": "Terry",
            "middle_name": "Jane",
            "last_name": "Anderson",
            "slug": "terry-anderson-md",
            "title": "MD",
            "image_url": "https://asset4.betterdoctor.com/images/549a6a314214f875200005b3-2_thumbnail.jpg",
            "gender": "female",
            "languages": [{
                "name": "English",
                "code": "en"
            }],
            "bio": "Dr. Terry Anderson is a cardiologist in Oakland, California and is affiliated with Dameron Hospital. She received her medical degree from University of Cincinnati College of Medicine and has been in practice for 29 years. She is one of 26 doctors at Dameron Hospital who specialize in Cardiovascular Disease."
        },
        "ratings": [],
        "insurances": [{
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix",
                "name": "Basic PPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetindividualfamilyppohix",
                "name": "Health Net Individual  Family - PPO  HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "anthem-blueviewvision",
                "name": "Blue View Vision",
                "category": ["vision"]
            },
            "insurance_provider": {
                "uid": "anthembluecross",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix",
                "name": "Basic EPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "cigna-vision",
                "name": "Vision",
                "category": ["vision"]
            },
            "insurance_provider": {
                "uid": "cigna",
                "name": "Cigna"
            }
        }, {
            "insurance_plan": {
                "uid": "vsp-vsp",
                "name": "VSP",
                "category": ["vision"]
            },
            "insurance_provider": {
                "uid": "vsp",
                "name": "VSP"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcommunitycarenetworkhmohix",
                "name": "Health Net CommunityCare Network - HMO  HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "medicare-medicare",
                "name": "Medicare",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicare",
                "name": "Medicare"
            }
        }, {
            "insurance_plan": {
                "uid": "medicaid-medicaid",
                "name": "Medicaid",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicaid",
                "name": "Medicaid"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnamdbronzesilverandgoldhmo",
                "name": "MD Bronze Silver  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-bluegoldhmo",
                "name": "Blue  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetwork",
                "name": "HMO - ExcelCare  Silver Network",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetworkmedicarecob",
                "name": "HMO - ExcelCare  Silver Network Medicare COB",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "anthembluecrossblueshield-golddirectaccesspluswhsa",
                "name": "Gold DirectAccess Plus with HSA",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "anthembluecrossblueshield",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "anthembluecrossblueshield-bronzedirectaccessplusgjqa",
                "name": "Bronze DirectAccess Plus - gjqa",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "anthembluecrossblueshield",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcabluegoldhmo",
                "name": "Health Net CA Blue  Gold HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "kaiserpermanente-kaiserpermanente",
                "name": "Kaiser Permanente",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "kaiserpermanente",
                "name": "Kaiser Permanente"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnamanagedchoiceposopenaccess",
                "name": "Aetna Managed Choice POS Open Access",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnahmo",
                "name": "Aetna HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnasignatureadministratorsppo",
                "name": "Aetna Signature Administrators PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnachoiceposii",
                "name": "Aetna Choice POS II",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnahmodeductibleplancamembersonly",
                "name": "Aetna HMO Deductible Plan CA members only",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "bcbsbluecard-bcbsbluecardppo",
                "name": "BCBS Blue Card PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscappo",
                "name": "Blue Cross CA PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscaadvantageppopreferreddirectaccessplus",
                "name": "Blue Cross CA Advantage PPO Preferred DirectAccess Plus",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcaindividualfamilyppo",
                "name": "Health Net CA Individual  Family PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcalargegroupppo",
                "name": "Health Net CA Large Group PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcacoveredcaliforniapposmallgroup",
                "name": "Health Net CA Covered California PPO - Small Group",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscacaliforniacarehmo",
                "name": "Blue Cross CA CaliforniaCare HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscaselectplushmo",
                "name": "Blue Cross CA Select Plus HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "anthem-blueviewvision",
                "name": "Blue View Vision",
                "category": ["vision"]
            },
            "insurance_provider": {
                "uid": "anthembluecross",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix",
                "name": "Basic EPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix",
                "name": "Basic PPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetindividualfamilyppohix",
                "name": "Health Net Individual  Family - PPO  HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "premerabcbs-premeraheritagesignaturehix",
                "name": "Premera Heritage Signature - HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "premerabluecrossblueshield",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "medicaid-medicaid",
                "name": "Medicaid",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicaid",
                "name": "Medicaid"
            }
        }, {
            "insurance_plan": {
                "uid": "medicare-medicare",
                "name": "Medicare",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicare",
                "name": "Medicare"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnamdbronzesilverandgoldhmo",
                "name": "MD Bronze Silver  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-bluegoldhmo",
                "name": "Blue  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetwork",
                "name": "HMO - ExcelCare  Silver Network",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetworkmedicarecob",
                "name": "HMO - ExcelCare  Silver Network Medicare COB",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnamanagedchoiceposopenaccess",
                "name": "Aetna Managed Choice POS Open Access",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnahmo",
                "name": "Aetna HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnasignatureadministratorsppo",
                "name": "Aetna Signature Administrators PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnachoiceposii",
                "name": "Aetna Choice POS II",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnahmodeductibleplancamembersonly",
                "name": "Aetna HMO Deductible Plan CA members only",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "bcbsbluecard-bcbsbluecardppo",
                "name": "BCBS Blue Card PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscappo",
                "name": "Blue Cross CA PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscaadvantageppopreferreddirectaccessplus",
                "name": "Blue Cross CA Advantage PPO Preferred DirectAccess Plus",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcaindividualfamilyppo",
                "name": "Health Net CA Individual  Family PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcalargegroupppo",
                "name": "Health Net CA Large Group PPO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetcacoveredcaliforniapposmallgroup",
                "name": "Health Net CA Covered California PPO - Small Group",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "Health Net"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscacaliforniacarehmo",
                "name": "Blue Cross CA CaliforniaCare HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "bluecrosscalifornia-bluecrosscaselectplushmo",
                "name": "Blue Cross CA Select Plus HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "bcbs",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "anthem-blueviewvision",
                "name": "Blue View Vision",
                "category": ["vision"]
            },
            "insurance_provider": {
                "uid": "anthembluecross",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicepobronzelevelhix",
                "name": "Basic EPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "blueshieldofcalifornia-blueshieldcabasicppobronzelevelhix",
                "name": "Basic PPO - Bronze level HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "blueshieldofcalifornia",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-healthnetindividualfamilyppohix",
                "name": "Health Net Individual  Family - PPO  HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "premerabcbs-premeraheritagesignaturehix",
                "name": "Premera Heritage Signature - HIX",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "premerabluecrossblueshield",
                "name": "BCBS"
            }
        }, {
            "insurance_plan": {
                "uid": "medicaid-medicaid",
                "name": "Medicaid",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicaid",
                "name": "Medicaid"
            }
        }, {
            "insurance_plan": {
                "uid": "medicare-medicare",
                "name": "Medicare",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "medicare",
                "name": "Medicare"
            }
        }, {
            "insurance_plan": {
                "uid": "aetna-aetnamdbronzesilverandgoldhmo",
                "name": "MD Bronze Silver  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "aetna",
                "name": "Aetna"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-bluegoldhmo",
                "name": "Blue  Gold - HMO",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetwork",
                "name": "HMO - ExcelCare  Silver Network",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }, {
            "insurance_plan": {
                "uid": "healthnet-hmoexcelcaresilvernetworkmedicarecob",
                "name": "HMO - ExcelCare  Silver Network Medicare COB",
                "category": ["medical"]
            },
            "insurance_provider": {
                "uid": "healthnet",
                "name": "HealthNet"
            }
        }],
        "specialties": [{
            "uid": "cardiologist",
            "name": "Cardiovascular Disease",
            "description": "Specializes in heart problems.",
            "category": "medical",
            "actor": "Cardiologist",
            "actors": "Cardiologists"
        }],
        "licenses": [{
            "state": "CA"
        }, {
            "number": "G59480",
            "state": "CA"
        }],
        "uid": "039898ea958ba96aca4e2c28494d0b02",
        "npi": "1912085705"
    };

    const {getByTestId} = render(<PageThree pagestate={{page: 3,setpage: setpagetest}} settingdoctor={{doc: doctortest,setdoc: setdoctest}}/>)
    fireEvent.click(getByTestId("Go Back"))
    expect(setpagetest).toHaveBeenCalledTimes(1);
})