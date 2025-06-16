import React, { useState } from 'react';
import { UserAvatar } from './UserAvatar';
import { StatusBadge } from './StatusBadge';

interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  status: 'active' | 'inactive' | 'onboarding';
  role: string;
  permissions: string;
  email: string;
  keywords: string[];
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Mayoralven',
    username: '@mayoralven',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/bcc582c5ed8e01a3ba7b38bf284c6014ee1cf2a7?placeholderIfAbsent=true',
    status: 'active',
    role: 'Administrator',
    permissions: 'Administrator',
    email: 'info@mayoralven.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '2',
    name: 'Lionesse Yami',
    username: '@Lyami',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/699cc1cd10d0f92db92de74ec8b2820221fea085?placeholderIfAbsent=true',
    status: 'active',
    role: 'Human resources',
    permissions: 'Human resources',
    email: 'l.yami@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '3',
    name: 'Christian Chang',
    username: '@Cchang',
    status: 'onboarding',
    role: 'Product Designer',
    permissions: 'Product Designer',
    email: 'c.chang@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '4',
    name: 'Jade Solis',
    username: '@Jsolis',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/77d2db68e4ed4de3ddfb06cb1157adad6247f49b?placeholderIfAbsent=true',
    status: 'active',
    role: 'UI Designer',
    permissions: 'UI Designer',
    email: 'j.solis@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '5',
    name: 'Claude Bowman',
    username: '@Cbowman',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/78d71a5700fb544162953be947a8111b7da51109?placeholderIfAbsent=true',
    status: 'onboarding',
    role: 'UX Designer',
    permissions: 'UX Designer',
    email: 'c.bowman@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '6',
    name: 'Mone Lara',
    username: '@Mlara',
    status: 'active',
    role: 'Accounting',
    permissions: 'Accounting',
    email: 'm.lara@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '7',
    name: 'Brooke Barber',
    username: '@Bbarber',
    status: 'active',
    role: 'Devops',
    permissions: 'Devops',
    email: 'b.barber@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '8',
    name: 'Ayesha Drake',
    username: '@Adrake',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/5fc4887dae6163f01556baf07ae91d5580b2eaee?placeholderIfAbsent=true',
    status: 'active',
    role: 'Backend',
    permissions: 'Backend',
    email: 'a.drake@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '9',
    name: 'Arnold Warren',
    username: '@Awarren',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/dd019ebe8015a9ff589744f8d54d9d1cef2155d9?placeholderIfAbsent=true',
    status: 'inactive',
    role: 'Sales manager',
    permissions: 'Sales manager',
    email: 'a.warren@emviui.com',
    keywords: ['Marketing', '+4']
  },
  {
    id: '10',
    name: 'Arnold Warren',
    username: '@Awarren',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/f2092c93674481d3d17b6547f480f441127e3a1a?placeholderIfAbsent=true',
    status: 'inactive',
    role: 'Sales manager',
    permissions: 'Sales manager',
    email: 'a.warren@emviui.com',
    keywords: ['Marketing', '+4']
  }
];

export const DataTable: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(mockUsers.map(user => user.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="border-[color:var(--color-border)] bg-white flex w-full flex-col items-stretch mx-auto pt-[11px] pb-[54px] px-px rounded-[12.503px] border-[1.042px] border-solid max-md:max-w-full max-md:mt-[7px]">
      {/* Table Header Controls */}
      <div className="flex w-full max-w-[1379px] items-stretch gap-5 text-sm font-medium tracking-[0.28px] leading-none flex-wrap justify-between ml-[26px] mr-[11px] max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-stretch gap-8 mt-[5px]">
          <button aria-label="Table options">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/6a822a27c43d5d39a2d93be3974ce1e825cc3d5b?placeholderIfAbsent=true"
              alt="Table options"
              className="aspect-[0.96] object-contain w-6 shrink-0"
            />
          </button>
          <button className="flex items-center gap-1.5 text-[#767677] whitespace-nowrap hover:text-[#565657] transition-colors">
            <span>Export</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/4550cb5316c5d4b8a0044f15f4169f5e66fe3b09?placeholderIfAbsent=true"
              alt="Export"
              className="aspect-[1] object-contain w-3.5"
            />
          </button>
          <button className="flex items-stretch gap-[5px] text-[#7E7E7E] hover:text-[#6E6E6E] transition-colors">
            <span>Create Alert</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/61e9db846b701b4ae3050feb997f8e91294ed5b2?placeholderIfAbsent=true"
              alt="Create alert"
              className="aspect-[1] object-contain w-4"
            />
          </button>
        </div>
        <div className="flex items-stretch gap-2.5 text-[#464F60] whitespace-nowrap">
          <button className="text-[#464F60] flex-1 shrink basis-[0%] rounded bg-[rgba(255,255,255,0.8)] shadow-[0px_0px_0px_1px_rgba(152,161,178,0.1)] gap-2 px-2.5 py-1 hover:bg-[rgba(245,245,245,0.8)] transition-colors">
            Edit
          </button>
          <div className="justify-center items-center shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(70,79,96,0.16)] flex gap-2 overflow-hidden bg-white pl-3 pr-[11px] py-1.5 rounded-[5.945px_0px_0px_5.945px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/703c36d1fd04c58e7e18f45a8a3cc5b1d69464cf?placeholderIfAbsent=true"
              alt="Filter"
              className="aspect-[1] object-contain w-4"
            />
            <span className="text-[#464F60]">All</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/d53b4e6c5352859c1da779688d0403c2dcc26f7d?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-4"
            />
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="flex min-h-[699px] overflow-hidden ml-[15px] mt-[9px]">
        {/* User Column */}
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          {/* Header */}
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="rounded bg-[rgba(253,253,253,1)] w-[19px] h-[19px] border-[rgba(220,220,220,1)] border-solid border-2"
              aria-label="Select all users"
            />
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                User
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/6d0f93c1ca24d5a4b299c97849e0bb3ba23d074e?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1] object-contain w-4"
              />
            </div>
          </div>
          
          {/* User Rows */}
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] w-full items-center gap-3.5 pl-[17px] pr-[7px] py-3 border-[rgba(220,220,220,1)] border-b`}
            >
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => handleSelectUser(user.id)}
                className="rounded bg-[rgba(253,253,253,1)] w-[19px] h-[19px] border-[rgba(220,220,220,1)] border-solid border-2"
                aria-label={`Select ${user.name}`}
              />
              <UserAvatar
                src={user.avatar}
                name={user.name}
                username={user.username}
              />
            </div>
          ))}
        </div>

        {/* Status Column */}
        <div className="h-[622px] w-[131px]">
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                Status
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/2caa89b2ac857f423510352595ad28ec1e946c24?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1.06] object-contain w-[17px]"
              />
            </div>
          </div>
          
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] w-full max-w-[187px] items-center gap-3 px-[17px] py-[22px] border-[rgba(220,220,220,1)] border-b`}
            >
              <StatusBadge status={user.status} />
            </div>
          ))}
        </div>

        {/* Company Name Column */}
        <div className="min-w-60 w-60">
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal leading-none">
                Company Name
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/6e0337b7667affe2a036fb1dd2aaf27b906318e2?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1.06] object-contain w-[17px]"
              />
            </div>
          </div>
          
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] w-full items-center gap-3 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b`}
            >
              <span className="text-[15px] text-neutral-600 font-bold leading-none">
                {user.role}
              </span>
            </div>
          ))}
        </div>

        {/* Permissions Column */}
        <div className="h-[680px] w-52">
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 pl-4 pr-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                Permissions
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/36c696384700dd8341bd18f7e783318f37874a5d?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1.06] object-contain w-[17px]"
              />
            </div>
          </div>
          
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] max-w-full w-52 items-center gap-3 pl-4 pr-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b`}
            >
              <span className="text-[15px] text-neutral-600 font-bold leading-none">
                {user.permissions}
              </span>
            </div>
          ))}
        </div>

        {/* Email Column */}
        <div className="h-[622px] w-52">
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                Email
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/2e67c5346a27359208185598e4954b68d9b411da?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1.06] object-contain w-[17px]"
              />
            </div>
          </div>
          
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] max-w-full w-52 items-center gap-3 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b`}
            >
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                {user.email}
              </span>
            </div>
          ))}
        </div>

        {/* Keywords Column */}
        <div className="h-[680px] w-52">
          <div className="bg-[rgba(246,246,246,1)] flex min-h-[62px] w-full items-center gap-2 px-[17px] py-[21px] border-[rgba(220,220,220,1)] border-b">
            <div className="flex items-center gap-1">
              <span className="text-[15px] text-neutral-600 font-normal whitespace-nowrap leading-none">
                Keywords
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b21ee557b7745c5a48d7a254ebad4cd/cd81b74581c31377917dc81677cd87cc33ea9979?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1.06] object-contain w-[17px]"
              />
            </div>
          </div>
          
          {mockUsers.map((user, index) => (
            <div
              key={user.id}
              className={`${index % 2 === 0 ? 'bg-[rgba(253,253,253,1)]' : 'bg-[rgba(253,253,253,1)]'} flex min-h-[62px] w-full max-w-52 items-center gap-3 px-[17px] py-[22px] border-[rgba(220,220,220,1)] border-b`}
            >
              <div className="flex items-center gap-2">
                {user.keywords.map((keyword, keywordIndex) => (
                  <span
                    key={keywordIndex}
                    className="bg-[#F6F6F6] text-xs text-neutral-600 font-normal whitespace-nowrap text-center px-[8.315px] py-[0px] rounded-[83.149px] border-[1.039px] border-solid border-[#BDBDBD]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
